import { FC } from 'react'

type Props = {
//   question: string
//   answers: string[]
  callback: any
  userAnswer: any
  questionNr: number
  totalQuestions: number
}

const QuestionCard: FC<Props> = ({
//   question,
//   answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className='number'>
        Questions: {questionNr} / {totalQuestions}
      </p>
      {/* <p dangerouslySetInnerHTML={{ __html: question }}></p> */}
      {/* <div>
        {answers.map((answer) => {
          return (
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default QuestionCard
