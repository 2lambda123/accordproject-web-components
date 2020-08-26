/* React */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Plugins */
import { FORMULA } from '../../ContractEditor/plugins/withClauseSchema';

//  overflow-wrap: break-word; // NEEDS TO BE NONE
export const FormulaTooltip = styled.span`
  visibility: ${props => (props.currentHover ? 'visible' : 'hidden')};
  margin-top: -${props => props.tooltipHeight}em;
  white-space: normal;

  &:before {
    content: '';
    position: absolute;
    top: ${props => props.caretTop}px;
    left: ${props => props.caretLeft - 1}px;
    border-top: 5px solid #141F3C;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &:after {
    content: '';
    position: absolute;
    top: ${props => props.caretTop}px;
    left: ${props => props.caretLeft}px;
    border-top: 4px solid #141F3C;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`;

/**
 * Component to render an inline formula node
 * This will have an id property of the Slate key
 * @param {*} props
 */
const Formula = React.forwardRef((props, ref) => {
  const {
    attributes,
    children,
    children: { props: { node } },
    children: { props: { node: { data } } },
    setFormulaNode,
    setHoveringFormulaContract
  } = props;
  const [hoveringFormula, setHoveringFormula] = useState(false);

  const handlerIn = () => {
    setHoveringFormula(true);
    setHoveringFormulaContract(true);
    setFormulaNode(node);
  };

  const handlerOut = () => {
    setHoveringFormula(false);
    setHoveringFormulaContract(false);
    setFormulaNode({});
  };

  const wrapperProps = {
    onMouseEnter: () => handlerIn(),
    onMouseLeave: () => handlerOut(),
    ...attributes,
  };

  const formulaProps = {
    id: data.name,
    className: FORMULA,
    ref
  };

  const formulaTooltip = {
    className: 'variableTooltip',
    currentHover: hoveringFormula,
    caretTop: 21,
    caretLeft: 2,
    tooltipHeight: 1.85,
    contentEditable: false
  };

  return (
    <span {...wrapperProps}>
        <FormulaTooltip {...formulaTooltip}>
            {data.code}
        </FormulaTooltip>
        <span {...formulaProps}>{children}</span>
    </span>
  );
});

Formula.displayName = 'Formula';

Formula.propTypes = {
  attributes: PropTypes.PropTypes.shape({
    'data-key': PropTypes.string,
  }),
  children: PropTypes.object.isRequired,
  setHoveringFormulaContract: PropTypes.func,
  setFormulaNode: PropTypes.func,
  editor: PropTypes.any,
  node: PropTypes.shape({
    data: PropTypes.obj,
  }),
  readOnly: PropTypes.bool,
};

export default Formula;
