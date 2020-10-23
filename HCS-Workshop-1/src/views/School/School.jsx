import React from "react";
import School from "../../components/School/School";

export default function SchoolScreen() {
    return (
        <div className="screen-background">
            Click the name of the school for more information! <br/>
            <School
                name="Harvard!"
                description="Yay Harvard! Studying Applied Math!"
            />
            <School
                name="Thomas Jefferson High School"
                description="High School in NOVA! Good Vibes!!"
            />
        </div>
    );
}
