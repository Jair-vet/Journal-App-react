import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography >Lorem ipsum ipsum atque exercitationem vero at architecto maiores.</Typography> */}
      {/* No hay nada seleccionado */}
      <NothingSelectedView />

    </JournalLayout>
  )
}
