import { ReactElement } from 'react'
import './alert.scss'

export interface AlertProps {
    open?: boolean
    leftIcon?: ReactElement | undefined
    rightIcon?: ReactElement | undefined
    message?: string | undefined
    variant?: 'primary' | 'warn' | 'success' | 'error' | undefined
    onClose?: () => void
}

export const Alert = ({
    open = true,
    message = 'Flash banner message.',
    variant = 'primary',
    onClose,
    leftIcon = (
        <svg
            className="octicon octicon-shield-check v-align-bottom"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9275 3.55567C11.9748 3.54134 12.0252 3.54134 12.0725 3.55567L19.3225 5.75264C19.4292 5.78497 19.5 5.88157 19.5 5.99039V11C19.5 13.4031 18.7773 15.3203 17.5164 16.847C16.246 18.3853 14.3925 19.5706 12.0703 20.4278C12.0253 20.4444 11.9746 20.4444 11.9297 20.4278C9.60747 19.5706 7.75398 18.3853 6.48358 16.847C5.2227 15.3203 4.5 13.4031 4.5 11L4.5 5.9904C4.5 5.88158 4.57082 5.78496 4.6775 5.75264L11.9275 3.55567ZM12.5075 2.12013C12.1766 2.01985 11.8234 2.01985 11.4925 2.12013L4.24249 4.3171C3.50587 4.54032 3 5.21807 3 5.9904L3 11C3 13.7306 3.83104 15.9908 5.32701 17.8022C6.81347 19.6021 8.91996 20.9157 11.4102 21.835C11.7904 21.9753 12.2095 21.9753 12.5897 21.835C15.08 20.9157 17.1865 19.6021 18.673 17.8022C20.169 15.9908 21 13.7306 21 11V5.99039C21 5.21804 20.4941 4.54031 19.7575 4.3171L12.5075 2.12013ZM16.2803 9.78033C16.5732 9.48744 16.5732 9.01256 16.2803 8.71967C15.9874 8.42678 15.5126 8.42678 15.2197 8.71967L11 12.9393L9.28033 11.2197C8.98744 10.9268 8.51256 10.9268 8.21967 11.2197C7.92678 11.5126 7.92678 11.9874 8.21967 12.2803L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L16.2803 9.78033Z"
            ></path>
        </svg>
    ),
    rightIcon = (
        <button
            className="flash-close js-flash-close"
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{ marginLeft: 'auto' }}
        >
            <svg
                className="octicon octicon-x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 30 30"
                width="30"
                height="30"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                ></path>
            </svg>
        </button>
    ),
    ...props
}: AlertProps) => {
    return (
        <>
            {open ? (
                <div className={`rucio-alert ${variant} m-l-10 m-r-100`}>
                    {leftIcon}
                    {message}
                    {rightIcon}
                </div>
            ) : null}
        </>
    )
}
