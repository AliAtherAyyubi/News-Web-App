import React, { Component } from 'react'

export default class loading extends Component {
  render() {
    return (
        <div className="text-center">
        <div className="spinner-border" role="status">
          {/* <span class="sr-only">Loading...</span> */}
        </div>
      </div>
    )
  }
}
