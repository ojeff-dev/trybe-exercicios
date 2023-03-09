import React from 'react';

class ShowUser extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <>
        {
          person.map((
            {
              email,
              name: { first, last, title },
              picture: { large },
              registered: { age }
            }
          ) => (
            <section key=''>
              <h1>{`${ title } ${ first } ${ last }`}</h1>
              <p>{ `idade: ${ age } anos`}</p>
              <p>{ `email: ${email}` }</p>
              <img src={ large } alt={ `${ title } ${ first } ${ last }` } />
            </section>
          ))
        }
      </>
    )
  }
}

export default ShowUser;
