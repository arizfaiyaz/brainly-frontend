interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'sma' | 'md' | 'lg';
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}

export const Button = (props : ButtonProps) => {

    return <button></button>
    
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"}/>