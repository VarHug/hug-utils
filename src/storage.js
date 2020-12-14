function serialize (val) {
  return JSON.stringify(val)
}

function deserialize (val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

// localStorage模块
export const hugStorage = {
  storage: window.localStorage,

  set (key, val) {
    if (val === undefined) {
      return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
  },

  get (key, def) {
    const val = deserialize(this.storage.getItem(key))
    return (val === undefined ? def : val)
  },

  has (key) {
    return this.get(key) !== undefined
  },

  remove (key) {
    this.storage.removeItem(key)
  },

  clear () {
    this.storage.clear()
  },

  getAll () {
    const ret = {}
    this.forEach((key, val) => {
      ret[key] = val
    })
    return ret
  },

  forEach (callback) {
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      callback(key, this.get(key))
    }
  }
}
