/* Browser extension that calculates the hourly wage Swagbucks pays you for taking surveys,
highlighting the survey that pays the most.

Author: Ulysses
Link: https://github.com/ulysseskan/swagsurveycalc
Creation: March 2023

Offered AS IS, with no support
*/

const eltable = document.getElementById('surveyList')

// Update table header
const headerCell = eltable.rows[0].cells[3]
headerCell.textContent = 'Hourly Wage'
headerCell.style.textAlign = 'left'

// Check if table exists
if (eltable) {
  // Initialize max result to a negative number
  let maxResult = -Infinity
  let maxResultRowIndex = -1

  // Iterate through each row in the table, starting from the second row
  for (let i = 1; i < eltable.rows.length; i++) {
    const row = eltable.rows[i]

    // Skip hidden rows
    if (row.classList.contains('profilerSurveyHidden')) {
      continue
    }

    const rewardCell = row.cells[1]
    const loiCell = row.cells[0]

    const reward = parseFloat(rewardCell.textContent)
    const loiText = loiCell.textContent.trim().replace(/[^0-9.]/g, '') // Remove any non-numeric characters from the cell content
    const loi = parseFloat(loiText) // Convert the remaining numeric string to a float

    const result = (reward / loi * 60 / 100).toFixed(2)

    const resultCell = row.insertCell(3)
    resultCell.textContent = '$' + result + '/hr'

    // Update maxResult and maxResultRowIndex if current result is greater
    if (parseFloat(result) > maxResult) {
      maxResult = parseFloat(result)
      maxResultRowIndex = i
    }
  }

  // Highlight cell with the highest result in green
  // If the highest result appears more than once, only highlight the first one
  if (maxResultRowIndex !== -1) {
    const maxResultCell = eltable.rows[maxResultRowIndex].cells[3]
    maxResultCell.style.backgroundColor = 'green'
    maxResultCell.style.color = 'white'
  }
}
