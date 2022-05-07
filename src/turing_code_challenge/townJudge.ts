// in a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

function findJudge(N: number, trust: number[][]): number {
  if (N === 1) return 1
  const trustMap = new Map<number, number[]>()
  const trustCount = new Map<number, number>()
  for (const [a, b] of trust) {
    if (!trustMap.has(a)) {
      trustMap.set(a, [b])
    } else {
      trustMap.get(a).push(b)
    }
    if (!trustCount.has(b)) {
      trustCount.set(b, 1)
    } else {
      trustCount.set(b, trustCount.get(b) + 1)
    }
  }
  for (const [key, value] of trustCount.entries()) {
    if (value === N - 1) {
      if (!trustMap.has(key)) {
        return key
      }
    }
  }
  return -1
}
