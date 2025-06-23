import { IInfo } from '../interfaces/IInfo';
import { PropertyType } from '../components/properties/types';
import { Feature, Role } from '../types/Role';
import { IChar } from '../interfaces/IChar';
import { Property } from './Property';
import { IGun } from '../interfaces/IGun';
import { Gun } from '../types/Gun';
import { Ammo_9mm } from './ammo/9mm';
import { IWeapon } from '../interfaces/IWeapon';
import { Melee } from '../types/Melee';

export class DefaultChar implements IChar {
  id = '0';
  info: IInfo = {
    name: '',
    age: '',
    pronouns: '',
    hpCurrent: 0,
    hpMax: 0,
    favors: 1,
    dollar: 0,
    crypto: 0,
    stress: new Property('Stress', 0, 10),
    risk: new Property('Verdacht', 0, 5),
    connections: new Property('Verbindungen', 0, 5),
  };

  attributes = {
    body: [
      new Property('Stärke', 2, PropertyType.Attribute),
      new Property('Geschicklichkeit', 3, PropertyType.Attribute),
      new Property('Ausdauer', 1, PropertyType.Attribute),
    ],
    social: [
      new Property('Charm', 2, PropertyType.Attribute),
      new Property('Manipulation', 3, PropertyType.Attribute),
      new Property('Fassung', 1, PropertyType.Attribute),
    ],
    brains: [
      new Property('Intelligenz', 2, PropertyType.Attribute),
      new Property('Willensstärke', 3, PropertyType.Attribute),
      new Property('Scharfsinn', 1, PropertyType.Attribute),
    ],
  };
  skills: Property[] = [
    new Property('Athletik', 2, PropertyType.Attribute),
    new Property('Bankwesen', 3, PropertyType.Attribute),
    new Property('Computer', 1, PropertyType.Attribute),
    new Property('Diebstahl', 1, PropertyType.Attribute),
    new Property('Einschüchtern', 1, PropertyType.Attribute),
    new Property('Etiquette', 1, PropertyType.Attribute),
    new Property('Fahren', 1, PropertyType.Attribute),
    new Property('Feuerwaffen', 1, PropertyType.Attribute),
    new Property('Gassenwissen', 1, PropertyType.Attribute),
    new Property('Gesellschaft', 1, PropertyType.Attribute),
    new Property('Glückspiel', 1, PropertyType.Attribute),
    new Property('Heimlich', 1, PropertyType.Attribute),
    new Property('Kunst', 1, PropertyType.Attribute),
    new Property('Lügen', 1, PropertyType.Attribute),
    new Property('Medizin', 2, PropertyType.Attribute),
    new Property('Nahkampf', 2, PropertyType.Attribute),
    new Property('Schlösser', 2, PropertyType.Attribute),
    new Property('Sprengstoffe', 2, PropertyType.Attribute),
    new Property('Trinkfest', 2, PropertyType.Attribute),
    new Property('Überleben', 2, PropertyType.Attribute),
    new Property('Überzeugen', 2, PropertyType.Attribute),
    new Property('Wahrnehmung', 2, PropertyType.Attribute),
    new Property('Werkzeuge', 2, PropertyType.Attribute),
    new Property('Wissenschaft', 2, PropertyType.Attribute),
  ];

  roles: Role[] = [
    new Role(
      'Einbrecher',
      new Feature(
        'Leise Sohlen',
        false,
        'Ein Bonuswürfel auf jede Aktion, die dafür sorgen soll, dass du nicht entdeckt wirst.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Einbruch zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature('...', false, '')
    ),
    new Role(
      'Fahrer',
      new Feature(
        'Unauffällig',
        false,
        'Ein Bonuswürfel auf jede Aktion, die dafür sorgt, dass dein Auto nicht entdeckt wird (Heimlich anderen Autos folgen, dein Auto vor der Polizei verstecken)'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Fahren zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature('...', false, '')
    ),
    new Role(
      'Geiselnehmer',
      new Feature(
        'Stockholm Syn.',
        false,
        'Ein Bonuswürfel auf jede Aktion, die damit zu tun eine Geisel zu Befehligen oder zu Überreden.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Geiseln zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature(
        'Volle Kontrolle',
        false,
        'Jede Geisel, die eine Aktion gegen dich oder entgegen deiner Befehle unternimmt, würfelt mit einem Strafwürfel.'
      )
    ),
    new Role(
      'Hacker',
      new Feature(
        'Nerd',
        false,
        'Ein Bonuswürfel auf jede Aktion, die mit Computern zu tun haben.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Computersystemen zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature('...', false, '')
    ),
    new Role(
      'Infiltrator',
      new Feature(
        'Guter Lügner',
        false,
        'Ein Bonuswürfel auf jede Aktion, die einen NPC überzeugen soll, dass du hier hingehörst.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Infiltration zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature(
        'Diskretion',
        false,
        'Jede Waffe die u bei dir trägst bringt 1 weniger Verdacht.'
      )
    ),
    new Role(
      'Sanitäter',
      new Feature(
        'Erste Hilfe',
        false,
        'Erfolgreiche Erste Hilfe von dir heilt 3, anstatt 1 Lebenspunkte'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Medizin & Erste Hilfe zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature(
        'Ruhige Hand',
        false,
        'Du kanns mit Geschicklichkeit + Medizin schwere Wunden operieren.'
      )
    ),
    new Role(
      'Soldat',
      new Feature(
        'Experte',
        false,
        'Ein Bonuswürfel auf alle Fernkampfaktionen und auf theoretisches Wissen über Waffen.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Waffen zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature(
        'Unter Feuer',
        false,
        'Du erhältst keinen Stress, wenn auf dich geschossen wird.'
      )
    ),
    new Role(
      'Techniker',
      new Feature(
        'Experte',
        false,
        'Ein Bonuswürfel auf Werkzeuge und Technik.'
      ),
      new Feature(
        'Unter Druck',
        false,
        'Bei Aktionen die mit Waffen zu tun haben, müssen mindestens zwei deiner Stresswürfel eine 1 zeigen, damit die Aktion als Stressbedingter Fehlschlag gilt.'
      ),
      new Feature(
        'WD-40',
        false,
        'Alle Würfe von NPCs, deine Werkarbeiten zu bemerken sind erschwert'
      )
    ),
  ];

  notes = '';
  inventory = '';

  weapons: IWeapon[] = [
    new Gun('Standard Pistole', '5d10', 'M', new Ammo_9mm(), false, 11, 12, 1),
    new Gun('Standard Pistole', '5d10', 'M', new Ammo_9mm(), false, 11, 12, 1),
    new Melee('Kampfmesser', '3d10 + 3', 1),
    new Melee('Baton', '2d10 + 5', 1),
  ];

  crewmate1 = { name: '', player: '', role: '' };
  crewmate2 = { name: '', player: '', role: '' };
  crewmate3 = { name: '', player: '', role: '' };
  crewmate4 = { name: '', player: '', role: '' };
}
