import { Button } from "@/components/ui/button"
import { menuBarData } from "@/util/menuBarData"
import Link from "next/link"
import styles from "../../app/styles/main.module.css"
import { ClassNameProps } from "@/interfaces/classNameProps"

export default function MenuBar({ className }: ClassNameProps) {
    return (
        <div className={className}>
            {menuBarData.map((text) => (
                <div key={text.key}>
                    <Button variant="ghost" className={styles.buttonMenuBar} title={text.title} asChild>
                        <Link href={text.href}>
                            {text.icon}
                            <span className={styles.responsiveTextTitle}>{text.title}</span>
                        </Link>
                    </Button>
                </div>
            ))}
        </div>
    )
}