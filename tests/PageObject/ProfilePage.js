const { expect } = require('@playwright/test');
const path = require('path');

class ProfilePage {

    constructor(page) {
        this.page = page;

        this.profileImage = page.locator("input[type='file']");

        this.fullName = page.locator(
            "input[placeholder='Enter your full name e.g. John Doe']"
        );

        this.nin = page.locator(
            "input[placeholder='Enter your NIN']"
        );

        this.phoneNumber = page.locator('input[type="tel"]');

        this.gender = page.getByRole('combobox').nth(1);

        this.dateOfBirth = page.locator(
            'input[placeholder="YYYY/ DD/ MM"]'
        );

        this.state = page.getByRole('combobox').filter({
            hasText: 'Select an option'
        });

        this.address = page.locator("input[name='address']");

        this.aboutYou = page.locator('[name="about_you"]');
    }

    async uploadProfilePicture() {

        const filePath = path.join(
            __dirname,
            '..',
            'upload',
            'IMG.txt.PNG'
        );

        await this.profileImage.setInputFiles(filePath);
    }

    async fillProfileDetails() {

        await this.fullName.fill('Adebayo Adeleye');

        await this.nin.fill('56443788595');

        await expect(this.phoneNumber)
            .toHaveValue('+234 8144393099');

        await this.gender.click();

        await this.page
            .getByRole('option', {
                name: 'prefer not to say'
            })
            .click();

        await this.dateOfBirth.fill('2000-08-14');

        await this.state.click();

        await this.page
            .getByRole('option', {
                name: 'Ondo',
                exact: true
            })
            .click();

        await this.address.fill(
            '20, oshinle street Akure'
        );

        await this.aboutYou.pressSequentially(
            "Hi, I'm Adebayo"
        );
    }
}

module.exports = { ProfilePage };