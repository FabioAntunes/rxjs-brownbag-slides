// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
import * as examples from './examples'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#EC0C8E',
    secondary: 'black',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Image src="/rxjs.svg" />
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            RxJS
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" progressColor="primary">
          <Heading size={4} textColor="primary" caps>
            What?
          </Heading>
          <Text size={6} textColor="secondary">
            RxJS is a library for reactive programming using Observables, to
            make it easier to compose asynchronous or callback-based code.
          </Text>
          <Text size={6} textColor="primary" margin="40">
            “Think of RxJS as Lodash for events.”
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={6} textColor="primary" caps>
            How?
          </Heading>
          <Text>
            ReactiveX combines the Observer pattern with the Iterator pattern
            and functional programming with collections to fill the need for an
            ideal way of managing sequences of events.
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={6} textColor="primary" caps>
            But seriously, how?
          </Heading>
          <List>
            <ListItem>Observable</ListItem>
            <ListItem>Observer</ListItem>
            <ListItem>Subscription</ListItem>
            <ListItem>Operators</ListItem>
            <ListItem>Subject</ListItem>
            <ListItem>Schedulers</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src="/ytho.jpg" style={{ height: 600 }} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Observable
          </Heading>
          <Text>
            represents the idea of an invokable collection of future values or
            events.
          </Text>
          <CodePane
            lang="javascript"
            source={examples.observable}
            margin="50px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Observer
          </Heading>
          <Text>
            is a collection of callbacks that knows how to listen to values
            delivered by the Observable. it can be an object:
          </Text>
          <CodePane
            lang="typescript"
            source={examples.observer}
            margin="50px auto"
            overflow="overflow"
          />
          <Text>Or just callbacks</Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={`.subscribe(next, error, complete)`}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Subscription
          </Heading>
          <Text>
            represents the execution of an Observable, is primarily useful for
            cancelling the execution.
          </Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.subscription}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Operators
          </Heading>
          <Text>
            are pure functions that enable a functional programming style of
            dealing with collections
          </Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.operators}
          />
          <Text>
            <a href="http://reactivex.io/rxjs/manual/overview.html#choose-an-operator">
              Choose an operator is your best friend
            </a>
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Schedulers
          </Heading>
          <Text>
            are centralized dispatchers to control concurrency, allowing us to
            coordinate when computation happens (limited use in JS)
          </Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.schedulers}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Subject
          </Heading>
          <Text>
            is the equivalent to an EventEmitter, and the only way of
            multicasting a value or event to multiple Observers
          </Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.subject}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            Hot vs Cold
          </Heading>
          <Text>
            Asides from the operators, this is where a lot of devs get confused
          </Text>
          <Text margin="50px auto 0">Cold:</Text>

          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.cold}
          />
          <Text>Hot:</Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.hot}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={4} textColor="primary" caps>
            Unicast and Multicast
          </Heading>
          <Text>
            Transforming a cold observable in a hot observable, using subjects
          </Text>
          <Text margin="50px auto 0">Unicast:</Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.unicast}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={4} textColor="primary" caps>
            Unicast and Multicast
          </Heading>
          <Text>
            Transforming a cold observable in a hot observable, using subjects
          </Text>
          <Text>Multicast:</Text>
          <CodePane
            margin="50px auto"
            lang="javascript"
            source={examples.multicast}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={1} textColor="primary" caps>
            Demo
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            More Stuff
          </Heading>
          <List>
            <ListItem>
              <a href="https://css-tricks.com/animated-intro-rxjs/">
                Animated intro to rxjs
              </a>
            </ListItem>
            <ListItem>
              <a href="http://rxmarbles.com/">RxJS marbles</a>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={3} textColor="primary" caps>
            More info
          </Heading>
          <List>
            <ListItem>
              <a href="https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87">
                Learning Observable By Building Observable
              </a>
            </ListItem>
            <ListItem>
              <a href="https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339">
                hot-vs-cold
              </a>
            </ListItem>
            <ListItem>
              <a href="https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93">
                on the subject of subjects
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          textColor="secondary"
          progressColor="primary"
        >
          <Heading size={1} textColor="primary" caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
