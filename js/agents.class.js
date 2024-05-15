class Agent {
    constructor(data) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.description = data.description;
        this.developerName = data.developerName;
        this.characterTags = data.characterTags;
        this.displayIcon = data.displayIcon;
        this.displayIconSmall = data.displayIconSmall;
        this.bustPortrait = data.bustPortrait;
        this.fullPortrait = data.fullPortrait;
        this.fullPortraitV2 = data.fullPortraitV2;
        this.killfeedPortrait = data.killfeedPortrait;
        this.background = data.background;
        this.backgroundGradientColors = data.backgroundGradientColors;
        this.assetPath = data.assetPath;
        this.isFullPortraitRightFacing = data.isFullPortraitRightFacing;
        this.isPlayableCharacter = data.isPlayableCharacter;
        this.isAvailableForTest = data.isAvailableForTest;
        this.isBaseContent = data.isBaseContent;
        this.role = data.role ? new Role(data.role) : null;
        this.recruitmentData = data.recruitmentData;
        this.abilities = data.abilities.map(ability => new Ability(ability));
        this.voiceLine = data.voiceLine;
    }
}

class Role {
    constructor(data) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.description = data.description;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
    }
}

class Ability {
    constructor(data) {
        this.slot = data.slot;
        this.displayName = data.displayName;
        this.description = data.description;
        this.displayIcon = data.displayIcon;
    }
}