import React, {RefObject, useEffect, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {StreamingError, StreamingErrorType, UseChunkedStream} from "@/lib/infrastructure/hooks/useChunkedStream";
import {RSEViewModel} from "@/lib/infrastructure/data/view-model/rse";
import '@/component-library/ag-grid-theme-rucio.css';
import {twMerge} from "tailwind-merge";
import Link from "next/link";
import {
    IFilterOptionDef,
    ITextFilterParams
} from "ag-grid-community";
import {HiExternalLink} from "react-icons/all";

type ListRSETableProps = {
    tableRef: RefObject<AgGridReact>
    streamingHook: UseChunkedStream<RSEViewModel>
}

// TODO: move to a different file
// TODO: collapse to see details
const ErrorTableOverlay = (props: { text: string, errorMessage: string }) => {
    return <div className="border p-2 border-base-error-600 text-base-error-600 mx-2">
        <div>{props.text}</div>
        <div className="text-sm">{props.errorMessage}</div>
    </div>;
};

const MessageTableOverlay = (props: { text: string }) => {
    return <div className="border p-2">{props.text}</div>;
};

const LoadingTableOverlay = () => {
    return <MessageTableOverlay text="Nothing here yet"/>
};

// TODO: handle the situation when RSE search returns 400 with a valid expression
const NoRowsOverlay = (props: { error?: StreamingError }) => {
    if (props.error) {
        switch (props.error.type) {
            case StreamingErrorType.BAD_METHOD_CALL:
                return <MessageTableOverlay text={"Loading..."}/>;
            case StreamingErrorType.NETWORK_ERROR:
                return <ErrorTableOverlay text={"Can't connect to the endpoint"} errorMessage={props.error.message}/>;
            case StreamingErrorType.BAD_REQUEST:
                return <ErrorTableOverlay text={"Invalid expression"} errorMessage={props.error.message}/>;
            case StreamingErrorType.NOT_FOUND:
                return <ErrorTableOverlay text={"Nothing found"} errorMessage={props.error.message}/>;
            case StreamingErrorType.INVALID_RESPONSE:
                return <ErrorTableOverlay text={"Invalid response"} errorMessage={props.error.message}/>;
            case StreamingErrorType.PARSING_ERROR:
                return <ErrorTableOverlay text={"Can't parse the response"} errorMessage={props.error.message}/>;
        }
    } else {
        return <MessageTableOverlay text={"Loading..."}/>
    }
}

// TODO: decompose this to a different file as well
const ClickableCell = (props: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={props.href}>
            <div>
                {props.children}
                <HiExternalLink className="text-neutral-100 text-2xl pl-2 inline"/>
            </div>
        </Link>
    );
}

const ClickableName = (props: { value: string }) => {
    return <ClickableCell href={`/rse/page/${props.value}`}>
        {props.value}
    </ClickableCell>
};

const DefaultTextFilterParams: ITextFilterParams = {
    filterOptions: ['contains'],
    buttons: ['reset'],
    maxNumConditions: 1,
};

const DefaultBooleanFilterParams: ITextFilterParams = {
    filterOptions: [
        'empty',
        {
            numberOfInputs: 0,
            displayKey: 'true',
            displayName: 'True',
            predicate: (_: any[], cellValue: any) => cellValue
        },
        {
            numberOfInputs: 0,
            displayKey: 'false',
            displayName: 'False',
            predicate: (_: any[], cellValue: any) => !cellValue
        }
    ],
    buttons: ['reset'],
};

const buildDiscreteFilterParams = (values: string[]): ITextFilterParams => {
    return {
        filterOptions: [
            'empty',
            ...values.map((value) => {
                return {
                    numberOfInputs: 0,
                    displayKey: value.toLowerCase(),
                    displayName: value,
                    predicate: (_: any[], cellValue: any) => cellValue === value
                } as IFilterOptionDef;
            })
        ],
        maxNumConditions: 1,
        buttons: ['reset']
    };
};


// TODO: decompose into a generic table component
export const ListRSETable = (props: ListRSETableProps) => {
    // TODO: implement styled badges for the values
    const [columnDefs] = useState([
        {
            headerName: 'Name',
            field: 'name',
            flex: 3,
            minWidth: 250,
            cellRenderer: ClickableName,
            filter: true,
            filterParams: DefaultTextFilterParams,
        },
        {
            headerName: 'Type',
            field: 'rse_type',
            flex: 1,
            minWidth: 125,
            filter: true,
            sortable: false,
            filterParams: buildDiscreteFilterParams([
                'DISK',
                'TAPE',
                'UNKNOWN'
            ])
        },
        {
            headerName: 'Volatile',
            field: 'volatile',
            flex: 1,
            maxWidth: 175,
            minWidth: 125,
            sortable: false,
            filter: true,
            filterParams: DefaultBooleanFilterParams
        },
        {
            headerName: 'Deterministic',
            field: 'deterministic',
            flex: 1,
            maxWidth: 175,
            minWidth: 150,
            sortable: false,
            filter: true,
            filterParams: DefaultBooleanFilterParams,
        },
        {
            headerName: 'Staging',
            field: 'staging_area',
            flex: 1,
            maxWidth: 175,
            minWidth: 125,
            sortable: false,
            filter: true,
            filterParams: DefaultBooleanFilterParams
        },
    ]);

    useEffect(() => {
        if (props.tableRef.current?.api) {
            props.tableRef.current!.api.showNoRowsOverlay();
        }
    }, [props.streamingHook.error]);

    useEffect(() => {
        // TODO: don't resize if the screen is too small
        const handleResize = () => {
            if (props.tableRef.current?.api) {
                props.tableRef.current!.api.sizeColumnsToFit();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [props.tableRef]);


    // TODO: custom pagination component on small screens
    return <div className={twMerge(
        "ag-theme-custom",
        "grid grow w-full"
    )}>
        <AgGridReact
            pagination={true}
            paginationAutoPageSize={true}
            ref={props.tableRef}
            loadingOverlayComponent={LoadingTableOverlay}
            noRowsOverlayComponent={(gridProps: any) => <NoRowsOverlay
                error={props.streamingHook.error} {...gridProps}/>}
            columnDefs={columnDefs}
            onGridReady={(params) => {
                params.api.sizeColumnsToFit(); // Ensures columns stretch to fit grid width
            }}
            domLayout="normal" // Ensures the grid fits within the flex container
        />
    </div>
}