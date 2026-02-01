{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Name for the shell
  name = "my-nodejs-project-shell";

  # Define the build inputs (dependencies)
  buildInputs = [
    # Pin to a specific major version of Node.js, e.g., nodejs-24_x
    pkgs.nodejs_24
    # Other tools like yarn, pnpm, etc. can be added here
    pkgs.yarn
  ];

  # Optional: A shell hook to run commands when entering the shell
  # Useful for adding local node modules to PATH
  shellHook = ''
    echo "Welcome to the Node.js development shell!"
    export PATH=$(pwd)/node_modules/.bin:$PATH
  '';
}