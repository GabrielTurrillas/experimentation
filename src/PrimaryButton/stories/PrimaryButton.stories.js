import PrimaryButton from "../PrimaryButton";
import StoryRouter from 'storybook-react-router'
import {
  defaultData,
  heroData,
  worksPageData,
  worksCodeData,
} from './data'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [StoryRouter()],
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <PrimaryButton {...args} />

export const Default = Template.bind({})
export const HeroButton = Template.bind({})
export const WorksPageButton = Template.bind({})
export const WorksCodeButton = Template.bind({})

Default.args = {
  ...defaultData
}

HeroButton.args = {
  ...heroData
};

WorksPageButton.args = {
  ...worksPageData
};

WorksCodeButton.args = {
  ...worksCodeData
}