
type variant = "primary" | "secondary";
interface ButtonProps {
    variant: variant
    size?: 'sma' | 'md' | 'lg';
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}

const varaintStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}


export const Button = (props : ButtonProps) => {


    return <button className={varaintStyles[props.variant]}>{props.text}</button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"}/>