var cp = "Gems";
var codcp = ['170+','360+','950+','2000+','360+','170+','950+','2000+','950+','2000+'];	
var names = ['1upCoop', 'Marko', 'AimWaka', 'Anemont2', 'Arcaloci18', 'Jhonny', 'Badgenema2', 'Lovegaming98', 'Cartridgeop', 'zaCk', 'Ministar', 'Classoranta33', 'Combat122', 'Datatah', 'Datatech34', 'Emulatorch65', 'Emulatorte74', 'FiDungeon67', 'HStreaming93', 'Hopetailzz', 'Hylysackxx', 'xJoysIndiex', 'Leaguermof55', 'LeeWizardz3z', 'Lemnison42', 'Leucomm12', 'Lexondi66', 'LunaticDj4c', 'Lutingar2x' ,'Tournat199', 'TzTours', 'T2rinial', 'Unitara54'];	
function create() {
VanillaToasts.create({
  title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
  text: document.body.valueToUse = codcp[Math.floor(Math.random() * codcp.length)] + cp,
  type: 'success',
  icon: './img/robux.png',
  timeout: 4000,
});
setTimeout(create, 5000)
}