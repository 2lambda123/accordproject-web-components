import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Library } from '@accordproject/ui-components';

export default { title: "Library" };
export const homogeneous = () => {
  const items = [
    {
      uri: text(
        "First template's Uri",
        "https://templates.accordproject.org/archives/acceptance-of-delivery@0.14.0.cta"
      ),
      name: text("First template's Name", "Acceptance of Delivery"),
      version: text("First template's Version", "0.14.0"),
      description: text(
        "First template's Description",
        "This clause allows the receiver of goods to inspect them for a given time period after delivery."
      ),
      itemType: 'template'
    },
    {
      uri:
        "https://templates.accordproject.org/archives/car-rental-tr@0.11.0.cta",
      name: "Car Rental (TR)",
      version: "0.11.0",
      description: "Ta Simple Car Rental Contract in Turkish Language",
      itemType: 'template'
    },
    {
      uri:
        "https://templates.accordproject.org/archives/certificate-of-incorporation@0.4.0.cta",
      name: "Certificate Of Incorporation",
      version: "0.4.0",
      description: "This is a sample Certificate of Incorporation.",
      itemType: 'template'
    },
    {
      uri:
        "ap://eat-apples@0.11.0#cecf1c8205a8f47bdbbade47046cf1661b4b8ba293f06a02dd43cf4481cc8639",
      displayName: "Eat Apples",
      name: 'eat-apples',
      version: "0.11.0",
      description: "This is a sample Certificate of Incorporation.",
      itemType: 'template'
    }
  ];
  const mockImport = () => {
    alert(
      "A function callback which is called when a link to import a new library item is clicked"
    );
  };
  const mockUpload = () => {
    alert(
      "A function callback which is called when a link to upload a new library item is clicked"
    );
  };
  const mockAddItem = () => {
    alert(
      "A function callback which is called when a link to add a new library item is clicked"
    );
  };
  const mockPrimaryButtonClick = () => {
    alert(
      "A function callback which is called when a primary button in a library item card is clicked."
    );
  };
  const mockSecondaryButtonClick = () => {
    alert(
      "A function callback which is called when a secondary button in a library item card is clicked."
    );
  };
  return (
    <Library
      items={items}
      onPrimaryButtonClick={mockPrimaryButtonClick}
      onSecondaryButtonClick={mockSecondaryButtonClick}
      onUploadItem={mockUpload}
      onImportItem={mockImport}
      onAddItem={mockAddItem}
    />
  );
};

homogeneous.decorators= [withKnobs];

export const heterogeneous = () => {
  const items = [
    {
      uri: text(
        "First template's Uri",
        "https://templates.accordproject.org/archives/acceptance-of-delivery@0.13.1.cta"
      ),
      name: text("First template's Name", "Acceptance of Delivery"),
      version: text("First template's Version", "0.20.10"),
      CiceroVersion: text("First template's Cicero Version", "0.22.0"),
      description: text(
        "First template's Description",
        "This clause allows the receiver of goods to inspect them for a given time period after delivery."
      ),
      itemType: 'template'
    },
    {
      uri:
        "variable://first-variable-item@0.10.1#fc26b60d5cb6c23c4e85ea643a6931bca96c42ec94e467df522d80fb79864353",
      name: "First variable item",
      version: "0.20.1",
      CiceroVersion: "0.21.0",
      description: "This is a sample variable item",
      itemType: 'variable'
    },
    {
      uri:
        "https://templates.accordproject.org/archives/car-rental-tr@0.10.1.cta",
      name: "Car Rental (TR)",
      version: "0.20.10",
      CiceroVersion: "0.21.0",
      description: "Ta Simple Car Rental Contract in Turkish Language",
      itemType: 'template'
    },
    {
      uri:
        "file://first-file-item@0.10.1#fc26b60d5cb6c23c4e85ea643a6931bca96c42ec94e467df522d80fb79864353",
      displayName: "First file item",
      name: 'first-file-item',
      version: "0.0.1",
      description: "This is a sample file item",
      itemType: 'file'
    }
  ];
  const mockImport = () => {
    alert(
      "A function callback which is called when a link to import a new library item is clicked"
    );
  };
  const mockUpload = () => {
    alert(
      "A function callback which is called when a link to upload a new library item is clicked"
    );
  };
  const mockAddItem = () => {
    alert(
      "A function callback which is called when a link to add a new library item is clicked"
    );
  };
  const mockPrimaryButtonClick = () => {
    alert(
      "A function callback which is called when a primary button in a library item card is clicked."
    );
  };
  const mockSecondaryButtonClick = () => {
    alert(
      "A function callback which is called when a secondary button in a library item card is clicked."
    );
  };
  return (
    <Library
      items={items}
      onPrimaryButtonClick={mockPrimaryButtonClick}
      onSecondaryButtonClick={mockSecondaryButtonClick}
      onUploadItem={mockUpload}
      onImportItem={mockImport}
      onAddItem={mockAddItem}
      itemTypes={[
        { filterName: 'Templates', type: 'template', name: 'TEMPLATE' },
        { filterName: 'Variables', type: 'variable', name: 'VARIABLE' },
        { filterName: 'Files', type: 'file', name: 'FILE' },
      ]}
    />
  );
};

heterogeneous.decorators= [withKnobs];
