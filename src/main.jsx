import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { Login } from './components/login/login.jsx'
import { DataBinding } from './components/data-binding/data-binding.jsx';
import { Flipkart } from './components/flipkart/flipkart.jsx';
import { Inox } from './components/inox/inox.jsx';
import { Fakestore } from './components/fakestore/fakestore.jsx';
import { EventBinding } from './components/event-binding/event-binding.jsx';
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx';
import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx';
import { MouseMove } from './components/mouse-move/mouse-move.jsx';
import { KeyDemo } from './components/key-demo/key-demo.jsx';
import { ButtonDemo } from './components/button-demo/butto-demo.jsx';
import { ElementState } from './components/element-state/element-state.jsx';
import { EMICalcualtor } from './components/emi-calculator/emi-calculator.jsx';
import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx';
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx';
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx';
import { ConditionalRender } from './components/conditional-render/conditional-render.jsx';
import { HomeDemo } from './components/home-demo/home-demo.jsx';
import { ContextDemo } from './components/context-demo/context-demo.jsx';
import { WeatherApp } from './components/weather-app/weather-app.jsx';
import { ParentComponent } from './components/transport-demo/transport-demo.jsx';
import { FormDemo } from './components/form-demo/form-demo.jsx';
import { FormikDemo } from './components/formik-demo/formik-demo.jsx';
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx';
import { NewFormDemo } from './components/new-form-demo/new-form-demo.jsx';
import { TutorialIndex } from './tutorial/tutorial-index.jsx';
import { FakestoreIndex } from './fakestore/fakestore-index.jsx';
import { MuiDemo } from './components/mui-demo/mui-demo.jsx';
import { ToDoIndex } from './to-do/todo-index.jsx';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <ToDoIndex/>
    </CookiesProvider>
  </StrictMode>,
)
