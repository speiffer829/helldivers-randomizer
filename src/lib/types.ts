
type WeaponTraitType = 'Light Armor Penetrating' | 'Medium Armor Penetrating' | 'Heavy Armor Penetrating' | 'Rounds Reload' | 'Incendiary' | 'Chargeup' | 'Explosive' | 'Beam' | 'Heat' | 'One Handed' | 'Stimulative'

export interface WeaponType {
	name: string;
	description: string;
	damage: number | string;
	capacity: number | string | 'infinite';
	fireRate?: number;
	recoil: number;
	traits: WeaponTraitType[];
	image?: string;
}

type PrimaryWeaponCategory = 'Assault Rifle' | 'Sniper Rifle' | 'Submachine Gun' | 'Shotgun' | 'Explosive' | 'Marksman Rifle' | 'Energy-Based' | 'Special' | 'Stun';

export interface PrimaryWeaponType extends WeaponType {
	category: PrimaryWeaponCategory;
}

type SecondaryWeaponCategory = 'Pistol' | 'Melee' | 'Special';

export interface SecondaryWeaponType extends WeaponType {
	category: SecondaryWeaponCategory;
}

type GrenadeTraitType = 'Explosive' | 'Incendiary' | 'Stun';

export interface GrenadeType {
	name: string;
	damage: number;
	penetration: number;
	outerRadius: number;
	fuseTime: number;
	image: string;
	traits: GrenadeTraitType[];
}