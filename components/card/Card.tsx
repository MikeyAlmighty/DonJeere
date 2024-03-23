interface CardProps {
    className: string
    description: string
}

export const Card = ({ description, className }: CardProps) => (
   <p className={className}>
       {description}
   </p>
)