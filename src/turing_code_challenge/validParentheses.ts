/* 1. Cria uma pilha responsável em armazenar os parenteses de abertura
2. Criar um mapa em que a chave é o parenteses de abertura e o valor é o parenteses de fechamento
3. Itera sobre a string de entrada
4. Se o token for um parenteses de abertura, adiciona-o na pilha
5. Caso não seja
  5.1. Verifica se a pilha está vazia. Pois se estiver, o token é um parenteses de fechamento sem um parenteses de abertura anterior, o que não é válido.
  5.2. Desempilha o último token da pilha, busca no mapa o valor correspondente ao token desempilhado e verifica se é diferente do token atual. Se for, o token é um parenteses de fechamento sem um parenteses de abertura anterior, o que não é válido.
6. Ao sair do loop, verifica se a pilha está vazia, caso esteja o programa é válido. */

const isValid = (s: string): boolean => {
  const stack: string[] = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (const token of s) {
    if (token in map) stack.push(token)
    else {
      if (stack.length === 0) return false
      if (map[stack.pop()] !== token) return false
    }
    return stack.length === 0
  }
}

export const validParenthesesTest = () => {
  const tests = ['([)[]{}]', '([)]', '{[()]}']
  const results = []
  for (const test of tests) results.push({ test, result: isValid(test) ? 'valid' : 'invalid' })
  console.table(results)
}
