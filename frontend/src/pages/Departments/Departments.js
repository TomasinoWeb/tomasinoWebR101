import "./departments.css"

const Departments = () => {
    return (
        <div className='Departments'>
            <div className='hero'>
                <h1 className='hero-title'>
                    Executive Affairs <br />
                    Publication <br />
                    Web Technologies <br />
                </h1>
            </div>

            <section className='departments-showcase-section'>
                <h2 className='departments-showcase-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                </h2>
                <div className='departments-showcase'>
                    <div className='departments-left-col'>
                        <p className=''>Departments</p>
                        <div className='departments-list'>
                            <p className='department'>Creatives</p>
                            <p className='department'>Community Development</p>
                            <p className='department'>External Affairs</p>
                            <p className='department'>Finance</p>
                            <p className='department'>Human Resources</p>
                            <p className='department'>Photography</p>
                            <p className='department'>
                                Publicity and Communications
                            </p>
                            <p className='department'>Secretariat</p>
                            <p className='department'>Videography</p>
                            <p className='department'>Web Technologies</p>
                            <p className='department'>Writing</p>
                        </div>
                    </div>
                    <div className='departments-right-col'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png'
                            alt='department'></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Departments
