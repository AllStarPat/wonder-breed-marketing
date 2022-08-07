/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectCard from "./project-card"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectCard
            title="Simple"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            WonderBreed takes the complexity out of NFT breeding, allowing you to immediately start breeding in any NFT game with no knowledge about the game's NFT genetics.
          </ProjectCard>
          <ProjectCard
            title="Easy"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            WonderBreed lets you simulate your breeds ahead of time to see expected traits, price, and profit before performing any breeds.
          </ProjectCard>
          <ProjectCard
            title="Instant"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            WonderBreed removes all of the tedious, manual blockchain transactions from the breeding process, allowing you to perform thousands of breeds in one click.
          </ProjectCard>
          <ProjectCard
            title="Safe"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            WonderBreed takes away the risk of making costly breeding mistakes by automating your breeding process for you.
          </ProjectCard>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <Svg icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <Svg icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
