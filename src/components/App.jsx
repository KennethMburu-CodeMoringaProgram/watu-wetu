import '../styles/app.css';

import People from './People';

// function showAdditional(additional) {
//     const alertInformation = Object.entries(additional)
//       .map(information => `${information[0]}: ${information[1]}`)
//       .join('\n');
//     alert(alertInformation)
//   };
const App = () => {

    return <div className="mt-2 container-fluid">
        <header id="app-header" className="rounded">
            <h1 id="app-title">Watu Wetu</h1>
        </header>

        <main id="app-main">
            <div className="row">
                <div className="banner">
                    <h1 className="maumau">Watu Wetu MauMau</h1>
                <People endpoint="kapenguria-six" />
                </div>
                <div className='cart'>
                    <h1 className='Music'>Music</h1>
                <People endpoint="OldSchool-Musix" />
                </div>

                <People endpoint="culture" />
            </div>
        </main>
    </div>
};

export default App;