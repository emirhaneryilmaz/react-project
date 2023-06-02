import { atom } from 'jotai';

const userName = atom('');
const userTc = atom('');
const isUser = atom(false);
const userId = atom('');
const userCity = atom('');
const userNeigh = atom('');
const userStreet = atom('');

export {userName, isUser, userId, userTc, userCity, userNeigh, userStreet};