export interface ProfileCardProps {
    onPress?: () => void;
    btnText: string;
    image?: string;
}

export interface CustomButtonProps {
    onPress?: () => void;
    btnText: string;
}

export interface HeaderProps {
    title: string;
    bgColor?: string;
    fontSize?: number;
    color?: string;
}

export interface ContainerProps {
    children: React.ReactNode;
    backgroundColor?: string;
}
