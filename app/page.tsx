import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline ">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
            id="123"
            name="Neura the brainy Explorer"
            duration={45}
            topic="Neural Network of the Brain"
            subject="Science"
            color="#ffda6e"
            />
            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                duration={30}
                topic="Derivatives & Integrals"
                subject="Maths"
                color="#e5d0ff"
            />
            <CompanionCard
                id="789"
                name="Verba the Vocubulary Builder"
                duration={30}
                topic="language"
                subject="English Literature"
                color="#BDE7FF"
            />

        </section>
        <section className="home-section">
            <CompanionsList
            title="Recentky Completed Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"/>
            <CTA />

        </section>
    </main>
  )
}

export default Page