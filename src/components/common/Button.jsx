import PropTypes from "prop-types";
import { Tooltip } from 'react-tooltip';
import { Icon } from '@iconify/react';

const buttonSizing = {
    // comment pixel size based on root element 16px
    gap: "gap-[0.5rem]", // 8px
    border_radius: "rounded-[1rem]", // 8px
    small: {
        w: "auto",
        h: "h-[2rem]", // 32px
        p: {
            x: "px-[0.75rem]", // 12px
            y: "py-[0.375rem]", // 6px
        },
    },
    medium: {
        w: "auto",
        h: "h-[3rem]", // 48px
        p: {
            x: "px-[1rem]", // 16px
            y: "py-[0.625rem]", // 10px
        },
    },
    large: {
        w: "auto",
        h: "h-[3.5rem]", // 56px
        p: {
            x: "px-[1.5rem]", // 24px
            y: "py-[1rem]", // 16px
        },
    },
};

export default function Button({ text, size, onClick, leading, trailing, tooltip, disabled, isLoading, id, ...props }) {

    const buttonSize = () => {
        if (size === "small") {
            return buttonSizing.small;
        } else if (size === "medium") {
            return buttonSizing.medium;
        } else if (size === "large") {
            return buttonSizing.large;
        } else {
            return buttonSizing.medium;
        }
    };

    const dynamicStyles = ` 
        ${buttonSize().p.x} ${buttonSize().p.y} ${buttonSizing.border_radius} ${buttonSizing.gap
        } 
    `;
    const gradientBg =
        " bg-gradient-to-br from-primary-1 from-6%  to-primary-3 to-100%";

    return (
        <>
            <button
                id={id}
                className={
                    "flex items-center w-fit select-none bg-primary-4 text-sm font-medium text-white transition duration-200 hover:bg-none active:bg-black" +
                    gradientBg +
                    dynamicStyles +
                    (disabled ? "opacity-50 cursor-not-allowed" : "")
                }
                onClick={onClick}
                disabled={disabled}
                {...props}
            >
                {
                    isLoading ? (
                        <Icon icon="line-md:loading-loop" width={20} />
                    ) :
                        <>
                            {leading}
                            {text}
                            {trailing}
                        </>
                }
            </button>

            {
                tooltip && (
                    <Tooltip
                        id="tooltip-styles"
                        anchorSelect={"#" + id}
                        content={tooltip}
                        place="top"
                        delayShow={600}
                    />
                )
            }


        </>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    onClick: PropTypes.func,
    leading: PropTypes.element,
    trailing: PropTypes.element,
    tooltip: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};
