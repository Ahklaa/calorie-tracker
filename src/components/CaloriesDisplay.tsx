type CaloriesDisplayProps = {
    calories : number,
    text: string
}
export default function CaloriesDisplay({calories,text}: CaloriesDisplayProps) {
  return (
    <p className="grid grid-cols-1 justify-center text-white font-bold rounded-lg gap-3 mt-10 text-center">
                <span className="font-black text-6xl text-orange">{calories}</span>
                {text}
    </p>
  )
}
