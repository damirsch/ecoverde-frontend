import classNames from "classnames"
import { ReactNode } from "react"

const DocumentWrapper = ({ children }: { children: ReactNode }) => {
	return <section className={classNames("flex flex-col mx-auto h-svh")}>{children}</section>
}

export default DocumentWrapper
