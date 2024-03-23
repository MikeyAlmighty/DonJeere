import "./Styles.scss"

interface BubbleProps {
    className: string
    text: string
}
export const Bubble = ({ text, className }: BubbleProps) => {
    return(
        <div className={className}>
            <p>{text}</p>
        </div>
    )
}