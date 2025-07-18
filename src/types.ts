export type Alimentos = 'carne' | 'linguica' | 'frango' | 'paoAlho'

export const quantidadePessoas: Record<Alimentos, number> = {
  carne: 400,
  linguica: 200,
  frango: 200,
  paoAlho: 100,
}

export const nomeAlimentos: Record<string, string> = {
  carne: 'Carne',
  linguica: 'Linguiça',
  frango: 'Frango',
  paoAlho: 'Pão de Alho',
}
