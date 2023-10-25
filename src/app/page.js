"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Home() {

  const [value, setValue] = useState(0)
  const [lastValue, setLastValue] = useState(0)
  const [operatorValue, setOperatorValue] = useState("+")
  const digits = ["=", ".", 0, 1, 2, 3, 6, 5, 4, 9, 8, 7]
  const operators = ["/", "*", "-", "+"]

  const handleCLick = (n) => {
    if (n !== "=") {
      const val = value === 0 ? n : `${value}${n}`
      setValue(val)
    } else {
      //mostrar resultado
      let result = 0
      switch (operatorValue) {
        case "+":
          result = parseFloat(lastValue) + parseFloat(value)
          break;
        case "-":
          result = parseFloat(lastValue) - parseFloat(value)
          break;
        case "*":
          result = parseFloat(lastValue) * parseFloat(value)
          break;
        case "/":
          result = parseFloat(lastValue) / parseFloat(value)
          break;
        default:
          result = parseFloat(lastValue) + parseFloat(value)
          break;
      }
      setValue(result)
    }
  }

  const handleOperatorClick = (o) => {
    setLastValue(value)
    setValue(0)
    setOperatorValue(o)
  }

  const handleValueChange = (e) => {
    setValue(e?.target?.value)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-400">
      
       <h1 className='font-bold text-center p-4'>Grupo de Samantha y krishna :D</h1>
      <Card className="max-w-screen-md w-full flex flex-col justify-center bg-orange-200">
        <CardHeader>
          <h1 className='font-bold text-center'>Calculadora</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className='flex gap-2'>
            <Input value={value} onChange={handleValueChange} className="text-right text-2xl" />
            <Button onClick={(e) => { setValue(0), setLastValue(0) }} >C</Button>
          </div>
          <div className='flex gap-2'>
            <div className='grid grid-cols-3 gap-2 flex-1'>
              {digits.map((n) => {
                return (
                  <Button className="h-20 rounded-md px-8 text-xl bg-slate-400" onClick={() => handleCLick(n)}>{n}</Button>
                )
              }).reverse()}
            </div>
            <div className='w-[6rem] flex flex-col gap-2'>
              {operators.map((o) => {
                return (
                  <Button variant="outline" className="h-20 rounded-md px-8 border-2 text-xl" onClick={() => handleOperatorClick(o)}>{o}</Button>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
