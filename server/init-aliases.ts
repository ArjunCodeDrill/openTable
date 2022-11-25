import moduleAlias from "module-alias";

moduleAlias.addAliases({
  "@server": __dirname,
  "@database": __dirname + "/database",
  "@gateway": __dirname + "/gateway",
});
