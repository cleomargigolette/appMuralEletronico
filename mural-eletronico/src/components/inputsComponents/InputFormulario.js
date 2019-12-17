import React, { Component, Fragment } from 'react';

export class InputFormulario extends Component {
    constructor() {
        super()

        this.state = {
            obrigatorio: true
        }
    }

    verificaCampoObrigatorio = () => {
        this.setState({ obrigatorio: this.props.value || false })
    }

    mostraMensagem() {
        if (this.state.obrigatorio) {
            return null
        }
        return <div className="mensagem">Campo obrigatorio</div>
    }

    render() {
        return (
            <Fragment >
                <input className="inputFormulario" type={this.props.tipo} placeholder={this.props.digite} name={this.props.name}
                    value={this.props.value} onChange={this.props.onChange} onBlur={this.verificaCampoObrigatorio} />
                {this.mostraMensagem()}
            </Fragment>)
    }

}