
type variant = "primary" | "secondary";
interface ButtonProps {
    variant: variant
    size?: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}

const varaintStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}
const defaultStyles = "rounded-md p-4 flex"

export const Button = (props : ButtonProps) => {


    return <button className={`${varaintStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text} 
        {props.endIcon}
        </button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"}/>