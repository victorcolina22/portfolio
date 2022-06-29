import { useTranslation } from "react-i18next";

import starwarsApp from '../../assets/projects/starwars-preview.PNG'

import Window, { CloseIcon, ExpandIcon, MinimizeIcon, WindowHeader } from '../../common/components/Window'

import './projects.css'

export const Projects = () => {
  const [t] = useTranslation("global");

  return (
    <div className="projects" id="myProjects">
      <h2 className="projects__title">
        {t("projects.projects")}
      </h2>

      <Window className="projects__carousel" style={{ margin: '30px auto 0' }}>
        <WindowHeader height="50px">
          <MinimizeIcon className="minimize" />
          <ExpandIcon className="expand" />
          <CloseIcon className="close" />
        </WindowHeader>

        <div className="projects__body" style={{ position: "relative" }}>
          <div className="starwars-project">
            <a
              href="https://github.com/victorcolina22/star-wars-blog-reading-list-react"
              target="_blank"
              rel="noreferrer"
              className="starwars-project__description">
              <p>{t("projects.starwars-app")}</p>
            </a>
            <img className="projects__preview" src={starwarsApp} alt="starwars-app-project" />
          </div>
        </div>
      </Window>
    </div>
  )
}
