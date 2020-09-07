import React from 'react'
import { BrowserRouter as Router,Route,Switch}
    from 'react-router-dom'
//import ComponentPromotionCards from '../components/promotion/card/Card'
import PagesPromotionSearch from './promotion/search'
import PagesPromotionForm from './promotion/form/Form'

const Root = ()=>{
  return (
    <Router>
      <Switch >
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/" component={PagesPromotionSearch} />
      </Switch>
    </Router>
    )
}

export default Root