interface Option<T> {
  timeout: number
  always: boolean
  interval: number
  rule?: (waitToInitValue?: T) => boolean
}

export default async function <T extends any>(
  waitToInitValue: () => T,
  option = {} as Option<T>
) {
  const _option = {
    timeout: 10000,
    always: false,
    interval: 50,
    rule: (v: T) => v !== undefined && v !== null,
    ...option,
  }

  return new Promise<T>((resolve, reject) => {
    let count = 0;
    const t = () => {
      const value = waitToInitValue()
      if (count <= _option.timeout / _option.interval) {
        if (_option.rule(value)) {
          resolve(value)
        } else {
          count++;
          setTimeout(() => t(), _option.interval);
        }
      } else {
        reject('timeout')
      }
    };
    t();
  })
}
