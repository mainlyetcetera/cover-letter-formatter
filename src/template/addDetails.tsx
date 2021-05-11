import * as types from '../types/types'

function addDetails(details: types.data): string {
  const { date, position, company, why, specifics, numValues, values, primeValue } = details
  const result = `${date}

Dear ${company},

My name is Eric Campbell. I am applying for your opening for a ${position}. ${why}!

I feel I can add value to ${company} as I have also built several full stack apps in the past. The simplest I have done was a ToDo app utilizing React, Express and PostgreSql. I prioritized making sure that it was updating live, so any change to the server would update the DOM; that needed React hooks lifecycle methods to achieve properly. Also, ${specifics}!

But the real reason I want to work with your company is what you have shown in your ${numValues} values: ${values}! I particularly appreciate ${primeValue}! 

I look forward to moving through the interview process and getting to know you all better!

Sincerely,
Eric Campbell, your next future dev!
`
  return result
}

export default addDetails
