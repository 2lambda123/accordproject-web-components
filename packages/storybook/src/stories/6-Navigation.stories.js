import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Navigation } from '@accordproject/cicero-ui';

export default { title: 'Navigation' };
export const navigation = () => {

  const mockNavigateToHeader = () =>{
    alert('Insert your navigation function here')
  }
  const headers=[{
    key: '1',
    text: text('clause text','This is a clause heading'),
    type: 'clause'
  },
  {
    key: '2',
    text: text('heading_one text','This is a H1 heading'),
    type: 'heading_one'
  },
  {
    key: '3',
    text: text('heading_two text','This is a H2 heading'),
    type: 'heading_two'
  },
  {
    key: '4',
    text: text('heading_three text','This is a H3 heading'),
    type: 'heading_three'
  },
  ]
  return (
    <Navigation
    headers={headers}
    navigateHeader={mockNavigateToHeader}
      />
  );
};

navigation.story = {
  component: navigation,
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: "Notes ...."
  }
};
