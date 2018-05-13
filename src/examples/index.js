export const observable = `const button = document.querySelector('button')
Rx.Observable.fromEvent(button, 'click').subscribe(() =>
  console.log('Clicked!')
)`

export const observer = `interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}`

export const subscription = `const sub = fromEvent(button, 'click').subscribe(() =>
  console.log('Clicked!')
)
sub.unsubscribe()`

export const operators = `fromEvent(button, 'click')
  .scan(count => count + 1, 0)()
  .subscribe(count) => console.log('Clicked! \${count} times'))
`

export const subject = `const subject = new Rx.Subject()

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1)
subject.next(2)
`

export const schedulers = `Rx.Observable.interval(0, Scheduler.animationFrame)`

export const cold = `const source = new Observable((observer) => {
  const socket = new WebSocket('ws://someurl');
  socket.addEventListener('message', (e) => observer.next(e))
  return () => socket.close()
})`

export const hot = `const socket = new WebSocket('ws://someurl')
const source = new Observable((observer) => {
  socket.addEventListener('message', (e) => observer.next(e))
})`

export const unicast = `const source = Rx.Observable.interval(1000)
//output: 0,1,2,3,4,5....
const subscribe = source.subscribe(val => console.log(val))`

export const multicast = `const source = Rx.Observable.interval(1000)
const subject = new Rx.Subject()
const multicasted = source.multicast(subject)
const subscription1 = multicasted.subscribe((v) => console.log('observerA: ' + v))
const subscription2 = multicasted.subscribe((v) => console.log('observerB: ' + v))

const subscripiton3 = multicasted.connect()`
