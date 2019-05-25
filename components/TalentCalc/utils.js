import { Alert } from 'react-native'

export const snakify = (str = '') => {
  return str
    .replace(/\s/g, '-')
    .replace(/\'/g, '')
    .toLowerCase()
}


export function getTreeBackgroundImagePath({
  classType = 'Warrior',
  tree = 'Fury',
  basePath = 'https://s3.amazonaws.com/wow-talent-calc/backgrounds'
}) {
  const url = [
    basePath,
    `background-${classType.toLowerCase()}-${snakify(tree)}.jpg`,
  ].join('/')

  return url
}

export function getSkillImagePath({
  skill,
  classType = 'Warrior',
  tree = 'Fury',
  basePath = 'https://s3.amazonaws.com/wow-talent-calc/skill-icons'
}) {
  const url = [
    basePath,
    classType.toLowerCase(),
    snakify(tree),
    snakify(skill) + '.jpg',
  ].join('/')

  return url
}