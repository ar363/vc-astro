import { atom, map } from 'nanostores'
import type { ActionSender, Room } from 'trystero'

export const fns = atom<{
  sendMessage: ActionSender<string>
  room: Room
} | null>(null)

export const messages = map<{ from: string; msg: string }[] | never[]>([])
