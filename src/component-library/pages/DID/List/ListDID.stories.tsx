import { Meta, StoryFn } from '@storybook/react';
import { ListDID } from './ListDID';
import { fixtureDIDMetaViewModel, fixtureDIDViewModel } from '@/test/fixtures/table-fixtures';
import { ToastedTemplate } from '@/component-library/templates/ToastedTemplate/ToastedTemplate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDecoratorWithWorker } from '@/test/mocks/handlers/story-decorators';
import { getMockStreamEndpoint } from '@/test/mocks/handlers/streaming-handlers';
import { getMockSingleEndpoint } from '@/test/mocks/handlers/single-handlers';
import { DIDType } from '@/lib/core/entity/rucio';

export default {
    title: 'Components/Pages/DID/List',
    component: ListDID,
} as Meta<typeof ListDID>;

const Template: StoryFn<typeof ListDID> = args => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ToastedTemplate>
                <ListDID {...args} />
            </ToastedTemplate>
        </QueryClientProvider>
    );
};

const listEndpoint = '/api/feature/list-dids';
const metaEndpoint = '/api/feature/get-did-meta';

export const ValidInitialPatternNoEndpoint = Template.bind({});
ValidInitialPatternNoEndpoint.args = {
    firstPattern: 'test:file',
};

export const InvalidInitialPatternNoDelimiter = Template.bind({});
InvalidInitialPatternNoDelimiter.args = {
    firstPattern: 'test',
};

export const InvalidInitialPatternTwoDelimiters = Template.bind({});
InvalidInitialPatternTwoDelimiters.args = {
    firstPattern: 'test:file:line',
};

export const RegularStreaming = Template.bind({});
RegularStreaming.args = {
    firstPattern: 'regular:streaming',
};
RegularStreaming.decorators = [
    getDecoratorWithWorker([
        getMockStreamEndpoint(listEndpoint, {
            data: Array.from({ length: 200 }, fixtureDIDViewModel),
        }),
        getMockSingleEndpoint(metaEndpoint, {
            getData: () => fixtureDIDMetaViewModel(),
        }),
    ]),
];

const controlledMeta = [fixtureDIDMetaViewModel(DIDType.FILE), fixtureDIDMetaViewModel(DIDType.DATASET), fixtureDIDMetaViewModel(DIDType.CONTAINER)];

const getControlledMetaRetriever = () => {
    let i = 0;
    return () => {
        const meta = controlledMeta[i];
        i++;
        if (i === controlledMeta.length) {
            i = 0;
        }
        return meta;
    };
};

export const SlowMeta = Template.bind({});
SlowMeta.args = {
    firstPattern: 'slow:meta',
};
SlowMeta.decorators = [
    getDecoratorWithWorker([
        getMockStreamEndpoint(listEndpoint, {
            data: Array.from({ length: 200 }, fixtureDIDViewModel),
        }),
        getMockSingleEndpoint(metaEndpoint, {
            getData: getControlledMetaRetriever(),
            getDelay: () => 1000,
        }),
    ]),
];

const controlledDelay = [2000, 1000, 500];
const getControlledDelayRetriever = () => {
    let i = 0;
    return () => {
        const meta = controlledDelay[i];
        i++;
        if (i === controlledDelay.length) {
            i = 0;
        }
        return meta;
    };
};

export const IrregularDelayMeta = Template.bind({});
IrregularDelayMeta.args = {
    firstPattern: 'irregular:delay',
};
IrregularDelayMeta.decorators = [
    getDecoratorWithWorker([
        getMockStreamEndpoint(listEndpoint, {
            data: Array.from({ length: 200 }, fixtureDIDViewModel),
        }),
        getMockSingleEndpoint(metaEndpoint, {
            getData: getControlledMetaRetriever(),
            getDelay: getControlledDelayRetriever(),
        }),
    ]),
];
