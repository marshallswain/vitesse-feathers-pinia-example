import { memory } from '@feathersjs/memory'
import { api } from '../feathers'
import { defineStore, BaseModel } from './pinia'

export class User extends BaseModel {}

const servicePath = 'users'
const whitelist = ['$regex', '$options']
export const useUsers = defineStore({ servicePath, Model: User, whitelist })

api.service(servicePath).hooks({})

// Use feathers-memory instead of requiring a server. Delete this section to use an API server.
api.use(servicePath, memory({
  store: {
    // https://myheroacademia.fandom.com/wiki/List_of_Characters
    0: { id: 0, name: 'Yuga Aoyama', age: 14, type: 'student', class: '1-A' },
    1: { id: 1, name: 'Mina Ashido', age: 15, type: 'student', class: '1-A' },
    2: { id: 2, name: 'Tsuyu Asui', age: 14, type: 'student', class: '1-A' },
    3: { id: 3, name: 'Tenya Ida', age: 14, type: 'student', class: '1-A' },
    4: { id: 4, name: 'Ochaco Uraraka', age: 15, type: 'student', class: '1-A' },
    5: { id: 5, name: 'Mashirao Ojiro', age: 15, type: 'student', class: '1-A' },
    6: { id: 6, name: 'Denki Kaminari', age: 14, type: 'student', class: '1-A' },
    7: { id: 7, name: 'Eijiro Kirishima', age: 14, type: 'student', class: '1-A' },
    8: { id: 8, name: 'Koji Koda', age: 15, type: 'student', class: '1-A' },
    9: { id: 9, name: 'Rikido Sato', age: 14, type: 'student', class: '1-A' },
    10: { id: 10, name: 'Mezo Shoji', age: 15, type: 'student', class: '1-A' },
    11: { id: 11, name: 'Kyoka Jiro', age: 14, type: 'student', class: '1-A' },
    12: { id: 12, name: 'Hanta Sero', age: 15, type: 'student', class: '1-A' },
    13: { id: 13, name: 'Fumikage Tokoyami', age: 14, type: 'student', class: '1-A' },
    14: { id: 14, name: 'Shoto Todoroki', age: 14, type: 'student', class: '1-A' },
    15: { id: 15, name: 'Toru Hagakure', age: 14, type: 'student', class: '1-A' },
    16: { id: 16, name: 'Katsuki Bakugo', age: 15, type: 'student', class: '1-A' },
    17: { id: 17, name: 'Izuku Midoriya', age: 14, type: 'student', class: '1-A' },
    18: { id: 18, name: 'Minoru Mineta', age: 14, type: 'student', class: '1-A' },
    19: { id: 19, name: 'Momo Yaoyorozu', age: 14, type: 'student', class: '1-A' },
    20: { id: 20, name: 'Yosetsu Awase', age: 15, type: 'student', class: '1-B' },
    21: { id: 21, name: 'Sen Kaibara', age: 15, type: 'student', class: '1-B' },
    22: { id: 22, name: 'Togaru Kamakiri', age: 14, type: 'student', class: '1-B' },
    23: { id: 23, name: 'Shihai Kuroiro', age: 15, type: 'student', class: '1-B' },
    24: { id: 24, name: 'Itsuka Kendo', age: 14, type: 'student', class: '1-B' },
    25: { id: 25, name: 'Yui Kodai', age: 15, type: 'student', class: '1-B' },
    26: { id: 26, name: 'Kinoko Komori', age: 15, type: 'student', class: '1-B' },
    27: { id: 27, name: 'Ibara Shiozaki', age: 14, type: 'student', class: '1-B' },
    28: { id: 28, name: 'Jurota Shishida', age: 14, type: 'student', class: '1-B' },
    29: { id: 29, name: 'Nirengeki Shoda', age: 15, type: 'student', class: '1-B' },
    30: { id: 30, name: 'Kosei Tsuburaba', age: 15, type: 'student', class: '1-B' },
    31: { id: 31, name: 'Tetsutetsu Tetsutetsu', age: 15, type: 'student', class: '1-B' },
    32: { id: 32, name: 'Setsuna Tokage', age: 15, type: 'student', class: '1-B' },
    33: { id: 33, name: 'Manga Fukidashi', age: 14, type: 'student', class: '1-B' },
    34: { id: 34, name: 'Juzo Honenuki', age: 15, type: 'student', class: '1-B' },
    35: { id: 35, name: 'Kojiro Bondo', age: 14, type: 'student', class: '1-B' },
    36: { id: 36, name: 'Neito Monoma', age: 15, type: 'student', class: '1-B' },
    37: { id: 37, name: 'Reiko Yanagi', age: 15, type: 'student', class: '1-B' },
    38: { id: 38, name: 'Hiryu Rin', age: 15, type: 'student', class: '1-B' },
  },
  paginate: {
    default: 5,
    max: 20,
  },
  whitelist,
}))
