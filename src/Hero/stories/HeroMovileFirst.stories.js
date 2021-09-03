import Hero from "../Hero";
import StoryRouter from 'storybook-react-router'
import { defaultData } from "./data";

export default {
  title: 'Screens/Hero',
  component: Hero,
  decorators: [StoryRouter()]
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }