async function main() {
  // Check script runs
  const people = ['James', 'Sebastian']
  people.forEach((name) => {
    console.log(name + ' has absolutely built forearms')
  })

  // Get balls
  const endpoint = 'https://4mcj2hm4m5.execute-api.us-west-1.amazonaws.com/ReturnBalls'
  const response = await fetch(endpoint, { method: 'POST' })
  const json = await response.json()
  console.log(`Got Response: ${json.msg}`)
}

main()
