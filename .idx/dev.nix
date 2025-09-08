{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [ pkgs.zip ];
  env = {};
  idx = {
    extensions = [];
    previews = {
      enable = true;
      previews = {};
    };
    workspace = {
      onCreate = {
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
      onStart = {};
    };
  };

  devShell = pkgs.mkShell {
    name = "isms-backend-shell";

    buildInputs = [
      pkgs.nodejs
      pkgs.postgresql
    ];

    shellHook = ''
      # Initialize PostgreSQL data directory if it doesn't exist
      if [ ! -d "$PWD/.pgdata" ]; then
        echo "Initializing PostgreSQL database cluster..."
        initdb --auth-local=trust --auth-host=trust -D ./.pgdata
      fi

      # Start PostgreSQL server on port 5432 in the background
      pg_ctl -D ./.pgdata -o "-F -p 5432" -l ./.pglog start || true

      echo "PostgreSQL server is running on port 5432."
      echo "You can connect with: psql -h localhost -p 5432 -d isms"
    '';
  };
}
