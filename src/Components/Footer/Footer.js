import React from 'react'
import footerStyle from './Footer.scss'

export default function Footer() {
  return (
    <>
    <style style={footerStyle}></style>
        <footer className="container-fluid footer">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h5>
                    All rights Reserved

                    </h5>
                </div>
                <div className="col-12 col-md-6 text-md-end">
                    <h5>
                    Contact Me
                    </h5>
                </div>
            </div>
        </footer>
    </>
  )
}